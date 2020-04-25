---
title: "How We Created a Realtime Patient Monitoring System With Go and Vue in 3 days"
date: 2020-04-25T00:55:56+05:30
draft: false
keywords:
  [
    "go",
    "covid19",
    "vue",
    "realtime",
    "patient",
    "remote-monitoring",
    "hospital",
  ]
categories: ["go", "covid19", "vue"]
author: "Kasun Vithanage"
# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
comment: true
toc: true
autoCollapseToc: false
postMetaInFooter: false
hiddenFromHomePage: false
# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
contentCopyright: false
reward: false
mathjax: false
mathjaxEnableSingleDollar: false
mathjaxEnableAutoNumber: false

# You unlisted posts you might want not want the header or footer to show
hideHeaderAndFooter: false

# You can enable or disable out-of-date content warning for individual post.
# Comment this out to use the global config.
#enableOutdatedInfoWarning: false

flowchartDiagrams:
  enable: false
  options: ""

sequenceDiagrams:
  enable: false
  options: ""
---

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/featured.png" >}}

## A Pandemic started

In the last November in 2019, we heard about the first case of unknown deadly diseases from China. Now everyone knows it as **Covid-19**
Now it seems to change our lives forever. The virus is deadly and it is highly contagious. Still, we know very little about it. I truly hope
we will find some cure soon.

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/corona-virus.jpg" caption="Corona Virus" >}}

## Covid-19 attacked Sri Lanka

Due to the nature of the virus, it was very hard to stop it from spreading.
In Sri Lanka, where I live we faced the same situation as everyone else.
And here we talk about how we helped our frontline in the battle by doing a small favour

## The risk of handling a Covid-19 ward

The deadly virus can infect you with a very small mistake. As healthcare workers,
our frontline has to wander around the isolation wards to check vital signs of a patient from time to time.
This task involves disposing of the protective gear after a visit. All just to check some reading on a device.

A request from health authorities reached us to develop a remote monitoring system for isolation wards. There are expensive softwares to remotely monitor them. But Sri Lanka might not be that rich to spend such amount of money.

## Journey began

So we (me and [Keshara](https://www.facebook.com/kesharaw)) did a bit of background research and found out these devices usually support a common protocol called HL7(Health Level Seven) to exchange medical data such as vital signs.

We studied the HL7 protocol for a while. It was bit weird. We have never worked with this protcol. It was a new experience.

HL7 messages are framed as below

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/hl7.png" caption="HL7 Packet" >}}

Inside the message section patient medical data is packed like below, `<CR>` is `\r` carrige return used to seperate messages

**Sample HL7 Message**

```hl7
MSH|^~\&|||||||ORU^R01|103|P|2.3.1|<CR>
PID|||14140f00-7bbc-0478-11122d2d02000000||WEERASINGHE^KESHARA||19960714|M|<CR>
PV1||I|^^ICU&1&3232237756&4601&&1|||||||||||||||A|||<CR>
OBR||||Mindray Monitor|||0|<CR>
OBX||NM|52^||189.0||||||F<CR>
OBX||NM|51^||100.0||||||F<CR>
OBX||ST|2301^||2||||||F<CR>
OBX||CE|2302^Blood||0^N||||||F<CR>
OBX||CE|2303^Paced||2^||||||F<CR>
OBX||ST|2308^BedNoStr||BED-001||||||F<CR>
```

Ok this looks weird right? We felt also. This is known as Pipehat format which uses `|` to seperate segments.
Im not going to talk much about protocol here. You can find plenty of resources in the internet.

We found out some cool libraries written in different languages to process the HL7 messages.

## Why Go

> Go or Golang is a statically-typed language with syntax loosely derived from that of C, with extra features such as garbage collection (like Java), type safety, and some dynamic-typing capabilities. developed at Google in 2007 by a bunch of clever people, Robert Griesemer, Rob Pike, and Ken Thompson.

Go was built for concurrency, it supports them as first-class citizens in the language itself. Go has goroutines and channels which allows programmers to quickly develop highly concurrent programs with minimal effort.

So we decided to pick up Golang. As for this task, we felt that we would have to deal with a lot of concurrent tasks. Also, Go binaries are statically built, so it makes easy to install the software on the hospital system without adding additional dependencies.

We kept looking for good libraries written in Go and found this [library](https://github.com/deoxxa/hl7) as a good one. Author of it has written a great [blog](https://www.fknsrs.biz/blog/golang-hl7-library.html) post about HL7 as well.

It supports selecting and parsing messages easily.

## Why VueJS

> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

In VueJS we can easily create beautiful reactive UIs with minimal efforts. We used it as you already know its purely awesome, easy and powerful. We also used
Vuetify for a UI library

## We got a real device

After playing with programmer guides for Mindray Bedside Monitor(it was common in the hospital, so we picked it up) we made a small prototype to decode hl7 messages. It could correctly decode hl7 messages and convert data to JSON correctly. We made this using Unsolisticated Result Interface defined in the Programmer Manual.

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/mindray-bedside-monitor.png" caption="Mindray uMec10" >}}

But when we got hands-on a real device it really did not work. So Keshara and I started analyzing packets in Wireshark to see what device is actually doing. So we find out that it is not talking this protocol at all. Its using Realtime Result Interface which was quite old and out of maintenance by manufacturer.

## Lets extract a message from HL7

Extracting a HL7 message from the device goes as follows. We used `bufio.Reader` for the task as it has a efficient way handling streams of inputs.
Instead of hitting the network layer everytime, `Reader` allowed us to efficiently read from an underlying TCP connection.

```go
func (d *Device) ProcessHL7Packet() (hl7.Message, error) {
    // read message start 0x0B
    b, err := d.ReadByte()
    if err != nil {
        return nil, fmt.Errorf("error reading start byte: %s", err)
    }
    if b != byte(0x0B) {
        return nil, fmt.Errorf("invalid header")
    }

    // read payload
    payloadWithDelimiter, err := d.ReadBytes(byte(0x1C))
    if err != nil {
        return nil, fmt.Errorf("error reading payload: %s", err)
    }

    // just verify and process next byte on the line
    b, err = d.ReadByte()
    if err != nil {
        return nil, fmt.Errorf("error reading end byte %s", err)
    }
    if b != byte(0x0D) {
        return nil, fmt.Errorf("invalid message end")
    }

    // skip last two bytes from the hl7 packet
    payload := payloadWithDelimiter[:len(payloadWithDelimiter)-1]
    log.Debugf("Length of payload %d\n", len(payload))
    m, _, err := hl7.ParseMessage(payload)
    if err != nil {
        return nil, fmt.Errorf("error parsing hl7: %s\n", err)
    }
    return m, err
}
```

## System Architecture

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/architecture.png" caption="System Architecture" >}}

The system design was done in a way its reliable for the long run. We carefully selected the best tools for the task.

The database we selected was **PostgreSQL** because it was stable and reliable. With HA setup we can create a good reliable database system for the monitoring system.
Also, PG supports high throughput data ingestion as well, it was a plus.

In future with **TimeScaleDB**, we gonna make this for _realtime analytics_ as well. So PG was the best overall selection as TimeScale can be installed on top of it in future.

We separated Gateway and API for management purposes. Gateway is designed to be lightweight and robust. Thanks to GoLang it was a cool experience.

## Going real world

Bedside monitor broadcasted its existence via UDP protocol. We had to capture the UDP packet and process it to extract necessary details to access the monitoring device.

We created a separate Go Service to detect the UDP broadcasts and register a new device within the system.
Next phase was to connect the Data Server inside the device from the Gateway. We created another service in Go to handle these TCP connections.

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/discovery.png" caption="Device Discovery" >}}

As our gateway need to connect as a client to the device, we had to coordinate the client disconnections as well. Also, we had to keep tabs on each monitor status in the gateway too.

Using Go [Channels](https://tour.golang.org/concurrency/2), we could easily save the Alarms to the **PostgreSQL** database for later analysis purposes.

**Channels** allow mutex free communication between goroutines without a pain. It was awesome to use them.

My experience developing a Redis Compatible In Memory Database known as [Kache](https://github.com/kasvith/kache) helped us a lot to solve many critical problems.

## Display vital signs in realtime

We parallelly started developing a good frontend application for displaying realtime results from devices for the medical staff. Keshara did the heavy lifting of the UI part and I feel it is awesome. Within just 3 days we made a really good UI for the task.

Starting with [Vuetify](https://vuetifyjs.com) we worked on a custom layout which is similar to a bedside monitor interface.

Using [Vuex](https://vuex.vuejs.org/) for state management we also developed a priority-based alarm service which alarms the staff on any critical condition.

We connected API and Frontend using [Socket.io](https://socket.io/), which allowed us to create an effective communication channel to deliver results in realtime.

I must thank Keshara again for his effort during the UI development.

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/patient-monitoring-ui.jpg" caption="Realtime Dashboard" >}}

## Deployment

These devices are sending data at high throughput. We decided to use separate VLAN for devices and another VLAN for the API to handle the traffic without flooding the Hospital Network. We also got help from our University Lecturers [Dr. Asitha Bandaranayake](http://www.ce.pdn.ac.lk/academic-staff/asitha-bandaranayake/) and [Dr. Suneth Namal Karunarathna](http://www.ce.pdn.ac.lk/academic-staff/suneth-namal-karunarathna/)

With their support, we were able to set up a solid network. Next, we started an Ubuntu 18.04 box and started deploying the system.

Keshara did the heavy lifting in here also, risking his own life in a hospital with possible COVID Patients.

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/setting-up-deployment.jpg" caption="Keshara is deplyoing the system in hospital" >}}

## Going production

In the pictures and videos below you can see it in action.

{{< youtube eqv4vrrX8vE  >}}

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/prod-1.jpg" caption="Dr. Sudarshana Wickramasinghe is testing the system" >}}

{{< figure class="align-center" src="/img/covid19-rpms-go-vue/prod-2.jpg" caption="Keshara and Dr. Sudarshana after deployment" >}}

## End Notes

We should help each other, our frontline is in the battle against the virus without even taking a rest. We all should help them. As Computer Engineering students, we did our best to support them by developing this system to remotely monitor patients.

This reduces contacts and helps them to be more effective and safe.

We thank all Opensource contributors who developed awesome tools/libraries, without them this would be a dream.

Using **Golang** was a brillient idea, we wrote a pretty stable system within few days.

Also **VueJS** helped us to create truely reactive nice UIs quickly.

Together We Can :heart:
