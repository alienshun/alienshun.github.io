(function () {
  'use strict';

  const previous = window.ACTIVITIES_MOMENTS_EN || {};

  window.ACTIVITIES_MOMENTS_EN = {
    ui: {
      viewMoment: 'View Moment',
      backToMoments: 'Back',
      close: 'Close',
      openImage: 'Open image',
      loadingMoment: 'Loading...'
    },

    items: [],

    moments: Array.isArray(previous.moments) ? previous.moments : []
  };
})();