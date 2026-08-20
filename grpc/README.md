# gRPC & Protocol Buffers Code Generation

This directory contains the `protos/` folder with our `.proto` definitions and the Buf configuration required to generate the gRPC client and server code for our polyglot services.

We use [Buf](https://buf.build) to manage Protobuf compilation. Buf allows us to use remote plugins, meaning **you do not need to install `protoc` or language-specific plugins locally!**

## Prerequisites

You only need the `buf` CLI installed. 

Using npm (recommended):
```bash
npm install -g @bufbuild/buf
```

Using Go:
```bash
go install github.com/bufbuild/buf/cmd/buf@latest
```

Using Homebrew (macOS/Linux):
```bash
brew install bufbuild/buf/buf
```

Using Scoop (Windows):
```bash
scoop install buf
```

Alternatively, you can download the binary directly. Check the [official installation guide](https://buf.build/docs/installation) for more details.

## Generating the Code

To generate all client and server stubs for all languages, simply run the following command from this directory (`c:\Projects\NexPyRS\grpc`):

```bash
buf generate
```

## Where does the code go?

After running the command, a new `generated/` directory will be created, containing the compiled code for each specified target:
- `generated/python/`: Python gRPC and Protobuf classes
- `generated/ts/`: TypeScript/ConnectRPC interfaces
- `generated/go/`: Go structs and gRPC interfaces
- `generated/java/`: Java classes
- `generated/cpp/`: C++ headers and source files
- `generated/rust/`: Rust structs (`prost`) and gRPC services (`tonic`)

## Modifying Plugins

If you need to update a plugin version or add support for another language, edit the `buf.gen.yaml` file. You can find available remote plugins on the [Buf Schema Registry](https://buf.build/plugins).
