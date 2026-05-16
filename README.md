# nyxian.app
[![Discord invite](https://dcbadge.limes.pink/api/server/Cbeg3gJzC7?style=flat)](https://discord.gg/Cbeg3gJzC7)
[![Deploy test site](https://github.com/emexlab/nyxian.app/actions/workflows/test_deploy.yml/badge.svg)](https://github.com/emexlab/nyxian.app/actions/workflows/test_deploy.yml)
[![Docusaurus Version](https://img.shields.io/github/package-json/dependency-version/emexlab/nyxian.app/%40docusaurus%2Fcore?logo=docusaurus&label=Docusaurus)](https://docusaurus.io/)

[nyxian.app](https://nyxian.app/) was built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Todo
- Documentations to write:
    - [ ] nxtool guide
    - [ ] Syscalls
    - [ ] Entitlement system
    - [ ] Kernel explaination

## Quickstart

```bash
./quickstart.sh
```

This script setups everything for you.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Github Pages

You can find an automatic build of the newest state at https://emexlab.github.io/nyxian.app/

### SSH

```bash
./deploy.sh user@host
```

This will build the site and upload it via ssh to the specified host as the specified user.

> [!NOTE]
> It’s recommended to set up SSH keys beforehand. Otherwise, you’ll be prompted for your SSH password three times during deployment.
