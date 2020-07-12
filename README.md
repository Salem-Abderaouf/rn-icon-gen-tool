# react-native-gen-tool

## Description :

Tool for react native developer to generate icons based on image with there file
structure

## Install :

```bash
npm i -g rn-icon-gen-tool
```

## Usage

```bash
generate-icons --help
```

```txt
Usage: --out [dir] --img [image] --fit [(cover)|contain|fill|inside|outside]

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
  -o, --out   Output directory
                           [string] [required] [default: "android/app/src/main"]
  -i, --img   Images to convert                              [string] [required]
  -f, --fit   Image should be resized to fit both provided dimensions
   [choices: "cover", "contain", "fill", "inside", "outside"] [default: "cover"]
```

##### Fit option :

**cover**: (default) Preserving aspect ratio, ensure the image covers both provided dimensions by cropping/clipping to fit.

**contain**: Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.

**fill**: Ignore the aspect ratio of the input and stretch to both provided dimensions.

**inside**: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.

**outside**: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
