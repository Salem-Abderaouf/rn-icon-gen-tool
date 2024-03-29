# react-native-gen-tool

## Description :

CLI tool for react native developers to generate icons based on an image, Both Android and Ios are supported
https://github.com/Salem-Abderaouf/rn-icon-gen-tool/blob/7640e72b093f8b5e8c5f4ed4cbcba2378f1fe0f8/lib/app.js#L42-L46
## Install :

```bash
npm i -g rn-icon-gen-tool
```

## Usage

```bash
generate-icons --help
```

```txt
Usage: --out [dir] --img [image] --fit [(cover)|contain|fill|inside|outside] --platform [(both)|android|ios]

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
  -o, --out   Output directory
                           [string] [required] [default: "android/app/src/main"]
  -i, --img   Images to convert                              [string] [required]
  -f, --fit   Image should be resized to fit both provided dimensions
   [choices: "cover", "contain", "fill", "inside", "outside"] [default: "cover"]
  -p, --platform to generate icons based on target platform  
   [choices: "both", "android", "ios"] [default: "both"]
```

##### Fit option :

**cover**: (default) Preserving aspect ratio, ensure the image covers both provided dimensions by cropping/clipping to fit.

**contain**: Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.

**fill**: Ignore the aspect ratio of the input and stretch to both provided dimensions.

**inside**: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.

**outside**: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
