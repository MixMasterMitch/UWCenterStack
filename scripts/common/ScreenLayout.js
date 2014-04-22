var ScreenLayout = Backbone.Marionette.Layout.extend({
    template: '#screenTemplate',
    regions: {
        backButtonZoneContent: '#backButtonZoneContent',
        homeButtonZoneContent: '#homeButtonZoneContent',
        mainZoneContent: '#mainZoneContent',
        inputZone1Content: '#inputZone1Content',
        inputZone2Content: '#inputZone2Content',
        inputZone3Content: '#inputZone3Content',
        inputZone4Content: '#inputZone4Content',
        inputZone5Content: '#inputZone5Content',
        volumeSliderZoneContent: '#volumeSliderZoneContent',
        playPauseButtonZoneContent: '#playPauseButtonZoneContent',
        nextButtonZoneContent: '#nextButtonZoneContent'
    }
});