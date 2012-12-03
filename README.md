# TorrentTV

This is really just the start of some ideas.  This doesn't do much yet.

Eventually, I will integrate streaming torrent viewer, using [node-torrent](https://github.com/superafroman/node-torrent) like the [python p2ptube](http://p2ptube.sourceforge.net/).

The plan is to parse an RSS feed, and add viewable torrents to a master-list. When a user chooses an episode, a streaming viewer will start downloading it, and initiate the player (mplayer, vlc, etc.)

I'd like to have watch-lists (for fvorite shows) and auto-downloading (in a more standard fasion, for healthier torrent network) for unattended torrent download, so you can watch stuff when it becomes available.
