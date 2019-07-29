---
title: Continuous Integration and Continuous Delivery  සිංහලෙන්
description: >-
  Software Development  වලදි  ඔබට  ඇතිවිය  හැකි  බොහෝමයක්  ගැටළු  මඟහරවාගන්න 
  ක්‍රමයක්  තමා  CI/CD  කියන්නෙ.
date: '2018-07-16T16:00:17.646Z'
draft: true
categories: []
keywords: []
slug: >-
  /@kasvith/continuous-integration-and-continuous-delivery-in-sinhala-286fa151ba8c
---

සිතන්න ඔබ කිසියම් **Software** එකක් නිර්මාණය කරනා විට ඔබ අතින් සිදු කරනා කිසියම් **Modification** එකක් නිසා ඔබ කලින් නිර්මාණය කරන ලද හොඳින් ක්‍රියාත්මක වූ **Software** එක නිසි ආකාරයෙන් ක්‍රියාත්මක නොවන අවස්ථාවක්.

සමහරවිට මෙය ඔබ **Modification** එක සිදු කරන ලද ස්ථානයේ නොව එය හේතුකොටගෙන වෙනත් ස්ථානයක ඔබට ඇස නොගැසෙන ලෙස සැඟව ඉන්න පුලුවන්. ඔබට පසුව පරිශීලකයෙක් මෙය ගැන පැමිණිලි කරනා විට ඔබ කලින් යෙදූ **Modification** එකද සෑහෙන තරමක් දුරට ඉදිරියට ගෙන ගොස් තිබෙන්න ඇති හැකියාව ඉහලයි. දැන් ඔබ පත්වෙලා ඉන්නෙ අපහසු අවස්ථාවකට. සමහරවිට ඔබ එම වෙනස්කම සිදු කරනා විට මෙය දැනගත්තානම් ඔබට එම **side effect** එක මගහරවා ගන්න තිබුණා.

ඔබ **Team** එකක වැඩ කරනවානම් තත්වය තවත් දරුණුයි. කිසියම් සාමාජිකයෙක් කරනාලද වෙනස්කමක් නිසා ඔබ සිදු කරන වෙනස්කම් නිසිලෙස පද්ධතිය තුල ක්‍රියාත්මක නොවෙන්න පුලුවන්. නමුත් ඔබත් ඔහුත් මේක දැනගන්නෙ සමහරවිට **release** එක කරාට පස්සෙ වෙන්න පුලුවන්. එවිට වෙනසක් කිරීම දෙදෙනාටම අපහසුයි.

එවිට ගන්න තීරණයක් නිසා සියළු සාමාජිකයන් මෙම පද්ධතිය නිසි ලෙස **test** කලාට පසුව release කරන්න තීරණය කරනවා. මේ අවස්ථාවේ එන ගැටළුව තමා අළුතෙන් _feature_ එකක් හෝ _bug fix_ එකක් ප්‍රධාන කේතයට ඇතුල් කරන්න **කොපමණ කාලයක්** යාවිද කියන එක.

මෙම සියල්ල කරනා විට ඔබ භාවිතා කරන කිසියම් Programming Language එකක් එහි **Major Release** එකක් කරනව. එහි ඇති ගුණාංග නිසා ඔබට ඕන වෙනවා මෙහි Release එකක් එම Language Version එක සඳහාත් කිරීමට. නමුත් එම version එකට ඔබේ code එක නොගැලපුනොත් එතනත් ගැටලුවක්.

සියල්ල විසඳුවට පස්සෙ ඔබට වෙනව විවිධ OS වලටත් මේක වැඩද බලන්න.

මේ සියල්ල කිරීමට විශාල කාලයක් වගේම ශ්‍රමයක් වැය කරන්න ඕන.

![](img/0__zb3As9COWoXLDOKR.png)

ඔබට වැටහෙනවා ඇති මෙවන් අවස්ථාවකට මුහුණ දෙන්න ක්‍රමවත් වැඩපිළිවෙලක අවශ්‍යතාවයක් තිබෙන බව.

මෙය ක්‍රමවත්ව හසුරුවාගෙන වේගවත්ව **Development** කටයුතු කිරීමට සහ හැකි ඉක්මණින් **Releases** කිරීමට හැකිවන ලෙස සකසාගත් ක්‍රමවේදයක් තමා **Continuous Integration and Continuous Delivery** හෙවත් **CI/CD** කියන්නෙ.

> CI/CD වලට යන්න පෙර අප දැනගන්න අවශ්‍යයි Version Control System ගැන.

### Version Control Systems (VCS)

**VCS** ගැන කියනවනම් **git** කියන වචනය අපට අමතක කරන්න බෑ. නිකමට හෝ කනට ඇහිලා තියන වචනයක් බොහෝ අයගෙ.

**VCS** එකක අවශ්‍යතාවය පැමිණෙන්නෙ කිසියම් අලුත් _feature_ එකක් හෝ _bug fix_ එකක් code එකට එක් කරන විට සහ **develop** කරන විට.

![**VCS Illustration**](img/1__sLLLekH9NMYNH__gIS__l2Eg.png)
**VCS Illustration**

ඔබේ project එක VCS එක තුල **repository** හෙවත් **repo** යන කෙටි නමින් හදුන්වනවා..

ඉහත රූපය හොඳින් බලනා විට ඔබට පේනව ඇති **අතු** බෙදුනු සංකල්පයක්. මේක **branches** කියල තමා හඳුන්වන්නෙ.

**සම්මතයක් ලෙස master යන branch එක තුල තමා නිවරදිව ක්‍රියාත්මක වන code එක තබාගන්නෙ.**

නවතම _feature_ එකක් හෝ _bug fix_ එකක් වෙනම branch එකක සිදු කරන එක සාමාන්‍යෙන් සිදු කරනවා.මෙහිදී වාසිය වෙන්නෙ **VCS tool** එක මගින් අපි කරන වෙනස්කම් **track** කරනව. එහිදී පෙර අවස්ථාවකට code එක **restore** කරන්න හෙවත් **revert** කරන්න අපිට පුලුවන්. වෙනම branch එකක් ගත්තම ඒකෙ සිදු කරන වෙනස්කම් වලින් අනෙක් branches වෙනස් වෙන්නෙ නැති නිසා ඔබ කරන අත්හදාබැලීම **master branch** එකය බලපාන්නෙ නෑ

අදාල _feature_ එක හෝ _bug fix_ එක **master branch** එකේ කේතය සමඟ එකතු කිරීමට merge කිරීම යයි කියනු ලබනව. මෙහිදී ඔබේ නව කේතයෙහි ඇති වෙනස්කම් **master branch** එකට එක් වෙන එකයි සිදුවන්නෙ.

ඔබට මෙම _project_ එක ඔබේ පරිගණකයේ හෝ වෙනත් පරිගණකයක තබගන්න පුලුවන්. _Team_ එකක් ලෙස වැඩ කරනාවිට **සියල්ලටම පහසුවෙන් access ලබාගතහැකි server එකක්** යොදාගන්නවා.

මෙහිදී [**Github**](http://github.com) සහ [**Gitlab**](http://gitlab.com) වැනි ආයතන **තවත් සේවාවන් සමගින්** _users_ ලා හට _project manage_ කිරීමට **git repository** ලබාදීම කරනවා. මෙම වෙනත් පරිගණකයක ඇති **repository** එකක් **remote** එකක් ලෙසයි සලකන්නෙ.

> ඉදිරියට යාම සඳහා ඔබේ **OS** එකට අදාලව **git install** කරගැනීම කල යුතු වෙනවා. ඒ සඳහා මෙම [link](https://git-scm.com/downloads) එකෙන් ඔබේ OS එකට අදාල ක්‍රමයට install කරගන්න.

_git install වූ පසු_ ඔබේ **command line** එකෙන් **git** ලෙස type කල විට පහත අයුරින් දිස්වනු ඇත.

![සාර්ථකව git install වූ අවස්ථාවක්](img/1__RxVudLa__pE20DBe0o20Xug.png)
සාර්ථකව git install වූ අවස්ථාවක්

> මෙම tutorial එක සඳහා [Gitlab](http://gitlab.com) යොදාගන්නා බැවින් එහි ගිණුමක් සකස් කරගන්න [මෙයට පිවිසෙන්න](https://gitlab.com/users/sign_in).

> මෙය සඳහා Python 3.x භාවිතා කරනා බැවින් එය පරිගණකය තුල [install](https://www.python.org/getit/) කරගන්න.

### Hello World

කිසියම් folder එකක් තුල (python-unittest වැනි) **hello.py** ලෙස ගොනුවක් සාදා එහි මෙම code එක paste කරන්න

දැන් command line එක තුල

python hello.py

ලෙස මෙම code එක run කල හැකියි.

![python hello.py](img/1__YSJzDdX2WQNvC3AFlrrxvQ.png)
python hello.py

### Unit Test එක් කිරීම

ඉහත folder එක තුලම _test\_hello.py_ ලෙස වෙනත් ගොනුවක් සාදා මෙය එහි paste කරන්න.

දැන් command line එක තුල

python  -m  unittest

ලෙස මෙය run කිරීම කල හැකියි.

![python -m unittest](img/1__U08Vh28nvOg7OnePrfZx7g.png)
python -m unittest

මෙහිදී **assertEqual** මගින්

assertEqual(first,  second)

හි first සහ second සමානදැයි එනම් **first == second** ද යන්න බලන එකයි වෙන්නෙ.

දැන් **hello.py** හි _helloWorld()_ මෙලෙස වෙනස් කර _python -m unittest_ යන්න run කර බලමු.

def helloWorld():

 _return_ 'hello'

![Unittest failed :(](img/1__TrbsagecCGvhJEIVs7__iwg.png)
Unittest failed :(

මෙහිදී ඔබට පේනවා ඇති unit test එක fail වූ බව. නැවත

 _return_ ‘hello world’

ලෙස එය සකසා save කරන්න.

### Git Repository

දැන් මෙම folder එක තුල

git init

ලෙස ටයිප් කල විට මෙම folder එක ඔබගේ **git repository** එකක් ලෙස සලකනු ඇත.

git add .  
git commit -m  "my first commit"

මෙමගින් වන්නේ ඔබේ folder එක තුල දැන් ඇති සියළුම වෙනස්කම්, **git** මගින් **track** කරන්න යන්නයි.

දෙවැන්නෙන් දැන් සිදු කල වෙනස **git repository** හි සටහන් කරගැනීම වෙනවා.

> මෙය VCS ගැන සවිස්තර tutorial එකක් නොවේ. එනිසා වැඩිදුර විස්තර කිරීම් නොමැති බව සලකන්න

### **GitLab සමග වැඩ අල්ලමු**

**GitLab** වෙත පිවිස ඉහල ඇති **+** ලකුණ මගින් **New Project** වෙත යන්න.

එවිට මතුවන තිරයේ **Project Name** සඳහා කැමති නමක් ලබා දී, _visibility level_ එක ඔබට කැමති පරිදි තබන්න.

![New Project](img/1__EEgg2L1yzRuEx1JjC0MK6Q.png)
New Project

දැන් **Create Project** ලබා දෙන්න. (**Initialize with Readme යන්න සලකුණු කරන්න එපා)**

![Empty repository](img/1__vZcNK2nZHMZ5yXj3OK8kuA.png)
Empty repository

දැන් මෙම දක්වා ඇති button එක මගින් ඔබ නිර්මාණය කල git repository එකේ url එක copy කරගන්න. මෙය **remote repository** එකක් ලෙස ක්‍රියාත්මක වේ.

දැන් ඔබ සිටිනා folder එක වෙත ගොස්

git remote add origin <paste your url here>

ලෙස ඔබගේ **local repo** එකට **remote** එකක් ලෙස එක් කරන්න.

දැන්

git push -u origin master

වලින් ඔබ දැනට සිටිනා branch එකේ තුල ඇති සියළු changes, remote එකට යොමු කරන්න පුලුවන්.

> **සැ.යු. : origin යනු ඔබ ලබාගත් git repo එක හැඳින්වීමට ගන්නා තවත් නමකි.**

දැන් gitlab එක තුල ඔබගේ project එක මෙලෙස දිස්වනු ඇත.

![Repo after push](img/1__Q0XTqVewKGCm9ioLrRXg4g.png)
Repo after push

### Continuous Integration(CI)

මෙහිදී සරලව වෙන්නෙ කිසියම් **developer** කෙනෙක් ගෙ **නවතම _code_** **එකක්**, එම අවස්ථාවේ පවතින **working code** එක සමඟ එකතු කර

*   එය **build** වෙනවාද
*   එය **tests** සමත් වෙනවාද

යන්න නිරන්තරයෙන් අවම මිනිස් මැදිහත්වීමක් යටතේ නිරීක්ෂණය තමා සිදුවන්නෙ.

### Continuous Delivery(CD)

මෙතනදි සරලවම වෙන්නෙ **CI** තුලින් සමත්වන කේතයක් **release** කිරීමයි. මෙය විවිධ **OS** සඳහා විවිධ _file format_ වලින් සිදු කල යුත්තක් වන්න පුළුවන්. එම ක්‍රියාව හැකි තරම් **automate** කරන එක තමා මෙතනින් කරන්නෙ.

![**CI/CD Pipeline** ([https://docs.gitlab.com/ee/ci/img/cicd\_pipeline\_infograph.png](https://docs.gitlab.com/ee/ci/img/cicd_pipeline_infograph.png))](img/0__ntAGo92AYYiJ8YBs.png)
**CI/CD Pipeline** ([https://docs.gitlab.com/ee/ci/img/cicd\_pipeline\_infograph.png](https://docs.gitlab.com/ee/ci/img/cicd_pipeline_infograph.png))

### CI/CD GitLab හරහා

මෙය සඳහා GitLab Repository එකක් තුල **.gitlab-ci.yml** නම් file එකක් අවශ්‍ය වෙනවා.

> **Windows OS** සඳහා **VSCode/Sublime/IntelliJ** වැනි code editor එකක් භාවිතා කිරීමෙන් මෙම **file නිර්මාණයේදී එන ගැටළු** මගහරවාගන්න පහසුවෙන් පුලුවන්

CI සඳහා අපට අවැසි වන්නේ **python unit test** සමත්වීමයි.

**.gitlab-ci.yml**

මෙම file එක මගින් **gitlab ට දැනුම් දෙනවා** කිසියම් branch එකකට **push** කරනා විට test කියලා **job** එකක් run කරන්න කියල.

මෙතනදි අපි යොදාගන්නේ python නිසා එයට අවශ්‍ය [**Docker**](https://www.docker.com/)  Image එක වන **python 3.7** මෙම අවස්ථාවට යොදාගන්න කියල.

**script** section එකෙන් **අපිට run කරන්න ඕන commands දෙන්න පුලුවන්.**

#### බලන් ඉන්නෙ ඇයි ?.

git add .gitlab-ci.yml  
git commit -m  "welcome to ci"  
git push origin master

දැන් Gitlab Project එක තුල **CI/CD -> Pipelines** වෙත ගොස් බලන්න.

_Running_ ලෙස දැක්වෙන්නේ ඔබ දැන් කල test එකයි.

![**CI/CD -> Pipelines**](img/1__VhH5c6SQAt9GyyTluFPsdQ.png)
**CI/CD -> Pipelines**

දැන් **status** යටතේ ඇති **latest** මත _click_ කරන්න

![**Pipeline**](img/1__0BE4__vgmRAnzzk00fh6liQ.png)
**Pipeline**

දැන් _Pipeline_ යටතේ ඇති _test_ යන **stage** එක මත _click_ කරන්න. පහත පරිදි ඔබගේ **test** එක සිදුවූ අයුරු දකින්න පුලුවන්.

![**Build Succeeded**](img/1__muuRMuUDVFKCzQxs5xLwUQ.png)
**Build Succeeded**

දැන් ඔබ නැවත project tab එකට ගියොත් දකින්න පුලුවන් **commit passed** කියලා.

![Commit Passed](img/1__lNi3Cp59te0ltdLMzU6amA.png)
Commit Passed

දැන් අපි වෙනත් **branch** එකක් වෙත යමු.

git checkout -b break-code

දැන් _hello.py_ හි

def helloWorld():

 _return_ 'hello'

ලෙස වෙනස් කරන්න.

දැන් නැවත

git add hello.py  
git commit -m "bye world"  
git push origin break-code

මෙයින් නවතම _branch_ එකකට code එක යනවා. දැන් **pipelines** තුල ඔබට දකින්න පුළුවන් ඔබගේ _branch_ එක run වෙනවා.

![Running test on **break -code** branch](img/1__z2bCwA38GhDx4036q7EvsQ.png)
Running test on **break -code** branch

අප කල වෙනස්කම නිසා _test_ එක **fail** වන බව දකින්න පුලුවන්.

![**Test failed :(**](img/1__q0Eq2jjqnOu8MXJQmaSMug.png)
**Test failed :(**

දැන් **Merge Request** වෙත ගොස් අදාල _branch_ එක තුල ඇති **Create Merge Reques**t යන්න _click_ කරන්න.

![**Create Merge Request**](img/1__D__KKo4kYjmXsZ5DZunch7A.png)
**Create Merge Request**

අදාල මාතෘකාවක් සහ විස්තරයක් ලබාදී

![Meaningful title and description](img/1__uPGYVLgUXBcojv__5iiQzBg.png)
Meaningful title and description![Select source and target](img/1__YsjGblV4pYAu9yRyL83vpQ.png)
Select source and target

දැන් අදාල **source** සහ **target (**_master_**)** තෝරා **Submit Merge Request** ලබාදෙන්න.

එයින් වෙන්නේ ඔබේ _break-code_ යන _branch_ එක **master** සමග එක් කරන එක.

එවිට පහත පරිදි **pipeline fail** වූ බවත්, **එය merge කිරීම අනතුරුදායක බවත් gitlab ඔබට දන්වා සිටිනව**.

![Not good to merge](img/1__APMIZfb__fZQbXzQtKWmXzA.png)
Not good to merge

එනම් මෙම code එක **master** තුල ඇති **වැඩකරනා** program එක **ඔබට අවශ්‍ය ලෙස වැඩ නොකරන තත්වයට** ගෙන එනවා.

**Close Merge Request** _click_ කරන්න.

නැවත command line හිදී

git checkout master

තුලින් අප **master branch** එකට යමු.

### Continuous Delivery

දැන් අපට ඕන වෙන්නෙ මෙම **master branch** එකට යමෙක් **push** කල විට හෝ කෙනෙක්ගෙ **Merge Request(Pull Request)** එකක් **merge** වූ විට එම නවතම code එක zip සහ tar ලෙස ලබාගන්න හෝ _Amazon S3, firebase, Heroku, Github Releases, Docker Registry_ වැනි ස්ථානයකට ලබා දීම.

මෙයට_.gitlab-ci.yml_ තුල මේ වෙනස්කම කරන්න.

Ready for Release

මෙහි ඔබට දකින්න පුළුවන් **test** හා **production** ලෙස **jobs** දෙකක් ඇති බව.

මෙහි _production_ හි **script** එක ලෙස අප ලබාදී තිබෙන්නෙ **current directory** එකේ තිබෙන සියලුම _python files_ , **.tar.gz** ලෙස **compress** කරන්න කියල. ඒ ගැන වැඩිදුර [මෙතනින්](https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/) දැනගන්න. අප දැන් සිටින්නේ **Linux Environment** එකක් තුලයි.

මෙය _master_ වලට _push_ කර _pipelines_ බැලූවිට මෙසේ දකින්න පුලුවන්

![**Parallel jobs**](img/1__8p0OccmrRn__CNyQBXsVqPg.png)
**Parallel jobs**

නමුත් ඔබ දකින්න ඇති _production_ තුලට ගොස් බැලුවොත් ඔබේ _release.tar.gz_ එක නොමැති බව. අප **GitLab CI** ට දැනුම් දෙන්න ඕන මේ හදන archive එක පසු භාවිතය සඳහා තියාගන්න ඕන කියල.

**තවත් ප්‍රශ්නයක් තමා test එක fail උනත් production run වීම.** මේක නොවියයුතු යමක්. **එනම් test එකෙන් පසුව තමා production එක වෙන්න ඕන**.

තවදුරටත්, අපිට **production stage එක run විය යුත්තේ** **master branch එකට push කලොත් පමණයි**. අනෙක් අවස්ථාවලදී අපට එහෙම දෙයක් ඕන නෑ.

ඒ සඳහා පහත ලෙස _.gitlab-ci.yml_ වෙනස් කරන්න

Improved CI/CD

මෙහි **stages** යනු _jobs_ එකින් එක සිදු විය යුතු ආකාරයයි. එනම් _test_ වලින් පසුව _production_ ලෙස යන්නයි.

සෑම **sequence** ලෙස run වෙන්න ඕන _job_ සඳහාම අපි stage එක define කරලා තියනවා(_Line 6, 12_)

**artifacts** වලින් අදාල path එක තුල ඇති file හෝ directory එක [**Gitlab CI Runner**](https://docs.gitlab.com/runner/)  විසින් සුරැකීම කරනවා.

**only** තුලින් අපට මෙය **master branch** එකට(හෝ අවශ්‍ය වෙනත් branch එකකට) **push** කරනා විට පමණක් ක්‍රියාත්මක වන්න සකසන්න පුළුවන්. (_ඔබ Merge Request/Pull Request_ **_merge_** _කරනා විටද මෙය වෙනවා, එහිදී_ **_gitlab_** _විසින් master branch එකට push කිරීම සිදු කරයි._)

දැන් ඉහත _.gitlab-ci.yml_ **push** කර _pipeline_ දෙස බලන්න…...

සියළු pipeline අවසානයේදී මෙලෙස ඔබේ **artifacts download** කරගත හැකියි.

![**Stages passed :)**](img/1__lnO7xQT0KPNh75aJzAufWA.png)
**Stages passed :)**![**Download Production Artifacts**](img/1__X8iA1m7cwEtJeTIizLW__5g.png)
**Download Production Artifacts**![**Downloaded files**](img/1__cdisUFwoGIAyHvaF3hu4pw.png)
**Downloaded files**

**දැන් අපට මෙහි දකින්න පුළුවන් අප සකස් කල ලෙසම release.tar.gz නිර්මාණය වී ඇති බව.**

### සටහන

> ඉතාම දිගු tutorial එකක් ලෙස මෙය ලියන්න වුනේ **VCS** වැනි tools ගැන **බොහෝමයක් නොදන්නා නිසයි**.

> සංකීර්ණ බව අවම කිරීම පිණිස සරල මට්ටමේ CI/CD මූලිකව මෙහි දක්වා තිබෙනව.

> **GitLab CI** පමණක් නොව, [**_Travis CI_**](https://travis-ci.org/)**,** [**_Circle CI_**](https://circleci.com/)**,** [**_Drone CI_**](https://drone.io/)**,** [**_Jenkins_**](https://jenkins.io/)**(_automated server_)** වැනි තවත් බොහෝ සේවාවන් පවතිනවා.

> බොහොමයක ක්‍රියාපටිපාටිය සිදුවන්නෙ මේ ආකාරයටයි. ඒවාගෙ documentation කියවා ඉදිරියට යන්න ඔබට හැකියි.

![](img/0__Mrh6ExV6s__PFUXE1.png)

#### මේ අනුව වඩාත් හොඳින් Software Systems නිර්මාණය කිරීමට ඔබට හොඳ අත්වැලක් ලැබුණායයි සිතනවා :)

Code : [https://gitlab.com/kasvith/sample-python-app](https://gitlab.com/kasvith/sample-python-app)