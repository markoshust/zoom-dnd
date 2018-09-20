const ps = require('ps-node');
const doNotDisturb = require('@sindresorhus/do-not-disturb');
const msInterval = 3000;
let isZoomRunning = false;
let wasZoomPreviouslyRunning = false;

setInterval(() => {
  ps.lookup({
    command: 'zoom.us.app',
    psargs: 'ux'
  }, (err, resultList) => {
    if (err) {
      throw new Error(err);
    }

    wasZoomPreviouslyRunning = isZoomRunning;
    isZoomRunning = resultList.map(process => !!process).length > 0;
    const shouldCheckDnd = !(wasZoomPreviouslyRunning === isZoomRunning);

    if (!shouldCheckDnd) {
      return;
    }

    if (isZoomRunning) {
        console.log('dnd enabled') || doNotDisturb.enable();
    } else {
        console.log('dnd disabled') || doNotDisturb.disable();
    }

    wasZoomPreviouslyRunning = !isZoomRunning;
  });
}, msInterval);
