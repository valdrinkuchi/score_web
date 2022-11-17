#!/bin/bash
npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./ \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./ \
./protoFiles/proto/*.proto