---
title: Multiple Layouts for VueJS Single Page Apps
description: >-
  It is a common problem that even a Single Page App needs Multiple Layouts to
  display views. For example, a Login Page may not require…
date: '2018-03-10T17:24:03.096Z'
draft: true
categories: []
keywords: []
slug: /@kasvith/multiple-layouts-for-vue-spa-app-fafda6b2bfc7
---

It is a common problem that even a **Single Page App** needs M**ultiple Layouts** to display views. For example, a Login Page may not require unnecessary toolbars etc.

Today I’m going to show you how I overcome this with **VueJS**. For this tutorial, I will assume you have knowledge on **VueJS, VueRouter,** and **Vuex **. We are going to use [**VuetifyJS**](https://vuetifyjs.com)  for style our application and for easy setup. You can use any other style guide with this method though.

### Lets Start

First install **vue-cli** and start a fresh SPA project using Vuetify Template.

> For non-vuetify projects, the procedure is same.

npm install -g vue-cli  
vue init vuetifyjs/webpack my-project  
cd my-project  
npm install  
npm run dev

![Install and configure **vue** application with **vue-cli**](img/1__9cOQFPwhBzd__HTM98oq9UQ.png)
Install and configure **vue** application with **vue-cli**

These commands will start the **_webpack development server_** on your machine. For simplicity we ignore setting up the testing part.

Now you will see this on your browser

![Default Application Created with **Vuetify** Template](img/1__ACPFhJpX4ceKrbP2qpQGYw.png)
Default Application Created with **Vuetify** Template

Now install [Vuex](https://vuex.vuejs.org/en/) using

npm install --save vuex

### **Dynamic Components**

**VueJS** is awesome. It has almost everything you need. For our task we target using [dynamic components](https://vuejs.org/v2/guide/components.html#Dynamic-Components).

**VueJS allows you to switch between components dynamically using same element**.

### Your Layouts

Before we start, we need to have some layouts. We are going to create two of them.

*   Simple: A simple layout as its name implies
*   App: Application layout with a fancy sidebar and a toolbar

Go ahead and create a folder **src/layouts** and add those two files in it

**src/layouts/SimpleLayout.vue**
`src/layouts/AppLayout.vue` (It may look complex, but it is up to you put the router-view where you want)

So in both files, you can see that I’ve put a `<router-view></router-view>` element. This is used by **VueRouter** to display a router view on the application.

Now we have two different layouts. For example to display a login page **SimpleLayout** can be used.

### Keep application state with Vuex

Since our application will be complex, we will use Vuex here to manage the state of the application.

Create **src/store/index.js** and add the following inside

Put this file as **src/store/index.js**

This is a very simple Vuex Store that used to hold the the state of the application. Here you can see there is a state variable for **layout** and it’s set to **simple-layout**. This is the name of the layout, we will define it soon in our application.

We have set a mutation called **SET\_LAYOUT** for changing the state of the layout state. As you know in Vuex, the only way to change a state is a commit using a mutation.

Also we have defined a getter called **layout** to get the state out of this variable.

### Show your layouts

Now you need a way to show your desired layouts. We have two of them and we now also have a Vuex store to keep track of the current layout in the application.

For this open **src/App.vue** and add the following

**src/App.vue**

In here we have imported our layouts and **put them under the components section** in the script. We also have given a name for each component. As you can see in **store** we have used _simple-layout_ as default and it refers to the component here.

We have a computed property also called layout. This computed property getting it’s value from the vuex store.

As computed property changes are causing UI updates, when the value in store changes it will also do necessary UI updates in this component.

Most important one here is the

<component v-bind:is="layout"></component>

This is a **dynamic component** in vue. It binds to a component in runtime and switch between components using the same element.

As you can see it was bound to the layout computed property. So once the store updates its value, it will also be passed to `v-bind:is`. Now this will bind the passed component inside the tags.

### Time to test

It’s time to test our application. Before that, we need a Testing component. Go to **src/components** and create a new file called **MyComponent.vue** and add following simple content

**src/components/MyComponent.vue**

In the following simple file we have created two buttons to switch between layouts and a method called `setLayout` for changing the layout.

`setLayout` is a simple method that does a commit to the store changing the layout value on the store.

As we know this will trigger computed property in `App.vue` to change its layout value in the dynamic component

Finally open your **router/index.js** and import this component like this

Sample router file **src/router/index.js**

This simply mounts the `MyComponent` in the root.

In your `main.js` there is one thing left to do, import and use your store there

**src/main.js**

This is the entry point your application and now your store is registered.

Save all the files and check your browser

![**Working Application**](img/1__Ktm1KzgEuyldwbAgZz99oQ.gif)
**Working Application**

### Conclusion

Here I’ve given you a full application implementation using **VuetifyJS** and using **Vuex**. Vuex was used to show you how to utilize this technique throughout the entire application, so you can change your layouts anywhere and anytime in your application.

Besides that, the concept is simple. It is all dynamic components. That’s all. When coupled with Vuex, we can craft the dream app we want with as many as layouts as needed, not limiting to default one.

**Now you can make your SPA application with multiple layouts same time**

You can get code [here](https://github.com/kasvith/vue-spa-multiple-layouts-example)

[![](https://cdn-images-1.medium.com/max/800/1*E6CoI_MRyZ1JInNPsBSHtA.png)](https://levelup.gitconnected.com)

[**Learn Vue.js - Best Vue.js Tutorials (2019) | gitconnected**  
_The top 27 Vue.js tutorials - learn Vue.js for free. Courses are submitted and voted on by developers, enabling you to…_gitconnected.com](https://gitconnected.com/learn/vue-js "https://gitconnected.com/learn/vue-js")[](https://gitconnected.com/learn/vue-js)