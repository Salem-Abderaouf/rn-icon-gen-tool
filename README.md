# react-native-gen-tool

## Description

Tool for react native developer to generate icons based on image with there file
structure

## Install

#### shell\
`npm install react-native-gen-tool`
#### shell\
`cd react-native-gen-tool && npm install`

## Usage

`node index.js [YOUR_IMAGE_PATH] [YOUR_OUTPUT_PATH] [FIT]`

Fit option :\
**cover**: (default) Preserving aspect ratio, ensure the image covers both provided dimensions by cropping/clipping to fit.

**contain**: Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.

**fill**: Ignore the aspect ratio of the input and stretch to both provided dimensions.

**inside**: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.

**outside**: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.

copy the generated folders to your project folder in

> /your/project/path/android/app/src/main
