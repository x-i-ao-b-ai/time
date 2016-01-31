#!/bin/bash
mkdir -p android/app/src/main/jniLibs/armeabi

rm android/app/src/main/jniLibs/armeabi/libtox4j.so
wget https://build.tox.chat/job/tox4j_build_android_armel_release/lastSuccessfulBuild/artifact/artifacts/libtox4j.so  -O android/app/src/main/jniLibs/armeabi/libtox4j.so

cd ${0%/*}

mkdir -p android/app/libs

rm android/app/libs/tox4j_2.11.jar
wget https://build.tox.chat/job/tox4j_build_android_armel_release/lastSuccessfulBuild/artifact/artifacts/tox4j_2.11-0.1-SNAPSHOT.jar -O android/app/libs/tox4j_2.11.jar

#rm android/app/libs/protobuf-java-2.6.1.jar
#wget https://build.tox.chat/job/tox4j_build_android_arm_release/lastSuccessfulBuild/artifact/artifacts/protobuf.jar -O android/app/libs/protobuf-java-2.6.1.jar