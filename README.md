# zoom-dnd

## Description

Detect if the Zoom videoconferencing software is running. If it is, enable Do Not Disturb (DND).

Once Zoom closes, it'll automatically disable DND.

## Usage

Run one time:

```
npx zoom-dnd
```

You can also set this up to run on boot by opening up crontab:

```
crontab -e
```

then adding this line:
```
@reboot npx zoom-dnd
```
