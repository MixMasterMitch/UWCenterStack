/**
 * View for music home screen
 */
AlbumSelectScreen= ScreenLayout.extend({

    initialize: function() {
        window.model = this.model;
        
        // back/home button defaults
        this.backgroundIconView = new BackgroundIconView({icon: '#iPodIcon'});
        this.backButtonView = new BackButtonView();
        this.homeButtonView = new HomeButtonView();

        this.vent = _.extend({}, Backbone.Events);

        this.playPauseButtonView = new PreviousButtonView();
        this.nextButtonView = new NextButtonView();
        
        // volume slider
        this.volumeSliderView = new VolumeSliderView({eventId: 'volume', viewId: '', vent: this.vent});

        this.inputZone4View = new SliderView({
            eventId: 'inputZone4',
            iconLeft: '#songIcon',
            eventCatcher: "#inputZone4EventCatcher",
            viewId: '',
            vent: this.vent
        });


        // default main zone view
        this.currentMusicModel = new CurrentMusicModel();
        this.currentMusicModel.set('album', 'some album');
        this.renderedMainZoneView = this.mainZoneView = new CurrentMusicSelectionView({model: this.currentMusicModel});
    },

    onRender: function() {
        this.backgroundIconContent.show(this.backgroundIconView);
        this.backButtonZoneContent.show(this.backButtonView);
        this.homeButtonZoneContent.show(this.homeButtonView);
        this.playPauseButtonZoneContent.show(this.playPauseButtonView);
        this.nextButtonZoneContent.show(this.nextButtonView);
        this.volumeSliderZoneContent.show(this.volumeSliderView);


        this.renderedMainZoneView ? this.mainZoneContent.show(this.renderedMainZoneView) : this.mainZoneContent.close();
        this.inputZone4Content.show(this.inputZone4View);
        
    },

    onBeforeClose: function() {
        this.vent.off();
    },

    onShow: function() {
        var self = this;

        this.listenTo(Controllers.MusicTree, 'loading loaded', function() {
            this.render();
        });
        this.listenTo(Controllers.MusicTree, 'emptied', function() {
            window.history.back();
        });


        // collection and view of tracks
        var trackCollection = new Backbone.Collection([]);
        var windowSize = Math.min(self.model.get('tracks').length, 25);
        var trackListView = new WindowListView({
            eventId: 'trackList',
            eventSource: 'inputZone4',
            collection: trackCollection,
            viewId: '',
            vent: this.vent,
            numLevels: self.model.get('tracks').length,
            windowSize: windowSize,
            windowStart: 0,
            windowSpeed: 25,
            selection: self.model.get('trackSelection')
        });

        Controllers.MusicTree.tracks.forEach(function(track) {
            trackCollection.push({text: track.get('name')});
        });

        this.vent.on('inputZone4:touchStart', function() {
            self.resetCollection(trackCollection, self.model.get('tracks'));
            self.renderedMainZoneView = trackListView;
            self.backgroundIconView = new BackgroundIconView({icon: '#songIcon'});
            self.render();
        }, this);


        this.vent.on('inputZone4:touchEnd', function() {
            self.renderedMainZoneView = self.mainZoneView;
            self.backgroundIconView = new BackgroundIconView({icon: '#musicIcon'});
            self.render();
            window.history.back();
        }, this);

        this.vent.on('trackList:select ', function(data, selection) {
            self.model.set('trackSelection', selection);

            var qs = new QueueSupplier(self.model.get('tracks'));
            for (var z = 0; z < selection; z++) {
                qs.next();
            }
            Controllers.Music.setSupplier(qs);
            Controllers.Music.start();

            self.resetModel();
        }, this);

    },

    resetModel: function() {
        this.model.set('tracks', Controllers.MusicTree.tracks.models);
        this.model.set('trackSelection', 0);
        this.model.set('albums', Controllers.MusicTree.albums.models);
        this.model.set('albumSelection', 0);
        this.model.set('artists', Controllers.MusicTree.artists.models);
        this.model.set('artistSelection', 0);
        this.model.set('artistInformation', null);
        this.model.set('playlists', Controllers.MusicTree.playlists.models);
        this.model.set('playlistSelection', 0);
        this.model.set('playListInformation', null);
    },

   resetCollection: function(collection, data) {
        collection.reset();
        for (var j = 0; j < data.length; j++) {
            collection.push({text: data[j].get('name')});
        }
        
    },
});



