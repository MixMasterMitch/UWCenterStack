Ext.define('feel-your-way.view.MusicMain', {
	extend: 'Ext.Container',
	requires: ['Ext.Button'],

	config: {
		layout: 'hbox',
		items: [
			{
				xtype: 'container',
				id: 'leftNav',
				position: 'absolute',
				top: '0px',
				left: '0px',
	            width: '100px',
	            defaults: {
	                xtype: 'button',
	                margin: '3 3 0 0',
	                height: '90px',
	                width: '90px'
	            },
	            items: [
	                {
	                    id: 'homeButton',
	                    iconCls: 'home',
	                    text: 'Home'
	                },
	                {
	                    id: 'artistButton',
	                    iconCls: 'artists',
	                    text: 'Artists'
	                },
	                {
	                    id: 'albumButton',
	                    iconCls: 'albums',
	                    text: 'Albums'
	                },
	                {
	                    id: 'songButton',
	                    iconCls: 'songs',
	                    text: 'Songs'
	                },
	                {
	                    id: 'playlistButton',
	                    iconCls: 'playlists',
	                    text: 'Playlists'

	                }
	            ]
			},
			{
				xtype: 'container',
				id: 'nowPlayingData',
	            html: '',
	            position: 'absolute',
	            top: '10px',
	            left: '120px',
			},
			{
				xtype: 'container',
				id: 'selectedData',
	            html: '',
	            position: 'absolute',
	            top: '150px',
	            left: '47%',
	            width: '10%'
			},
			{
				xtype: 'container',
				id: 'nowPlayingTag',
	            html: '',
	            position: 'absolute',
	            top: '0px',
	            left: '537px',
	            top: '45px',
	            height: '100%'
			},
			{
				xtype: 'dialselector',
				id: 'music',
				position: 'absolute',
				left: '60%',
				top: '0px',
				width: '90%'
			},
			{
				xtype: 'container',
				id: 'fadeImage',
	            html: '',
	            position: 'absolute',
	            top: '0px',
	            right: '0px',
	            width: '200px',
	            height: '100%'
			},
			{
				xtype: 'container',
				id: 'rightNav',
	            width: '100px',
	            position: 'absolute',
	            right: '0px',
	            defaults: {
	                xtype: 'button',
	                margin: '3 3 0 0',
	                height: '90px',
	                width: '90px'
	            },
	            items: [
	                {
	                    id: 'nowPlaying',
	                    text: 'Now<br />Playing'
	                },
	                {
	                    id: 'trebleButton',
	                    iconCls: 'treble',
	                    text: 'Treble'
	                },
	                {
	                    id: 'bassButton',
	                    iconCls: 'bass',
	                    text: 'Bass'
	                },
	                {
	                    id: 'repeatButton',
	                    iconCls: 'repeat',
	                    text: 'Repeat'
	                },
	                {
	                    id: 'shuffleButton',
	                    iconCls: 'shuffle',
	                    text: 'Shuffle'
	                }
	            ]   
			}
		]
	}
})