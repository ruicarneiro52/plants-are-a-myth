ECHO APPVEYOR_REPO_BRANCH: %APPVEYOR_REPO_BRANCH%
ECHO APPVEYOR_REPO_TAG: %APPVEYOR_REPO_TAG%
ECHO APPVEYOR_BUILD_NUMBER : %APPVEYOR_BUILD_NUMBER%
ECHO APPVEYOR_BUILD_VERSION : %APPVEYOR_BUILD_VERSION%
cd ..\UmbracoCultures\

Call npm install

cd ..\BuildPackage\
Call Tools\nuget.exe restore ..\UmbracoCultures.sln
echo yo
Call "%programfiles(x86)%\MSBuild\12.0\Bin\MsBuild.exe" package.proj