//THIS IS THE SCRIPT TO GENETATE FAKE DATA.            
  /*  
    The code below is not part of the Rickshaw.Fixtures.PubNub extension.

    ===========

    This uses the included PubNub library to pubnub.publish()
    packets to the pubnub.subscribe() call waiting inside the
    framework.

    Notice how the subscribe_key and channel name matches.

    You probably want to publish data from the backend instead.
    Check out our docs for more info:

    http://www.pubnub.com/docs

  */

  var pubnub = PUBNUB.init({
    publish_key: 'pub-c-abdb53b8-fc73-402b-82a5-e9a5f1d9cd3d',
    subscribe_key: 'sub-c-2f5f464c-0a20-11e5-83d4-0619f8945a4f'
  });

  setInterval(function(){
    pubnub.publish({
      channel: 'prismetic_tst',
      message: {
        y: Math.random() * 99,
        x: new Date().getTime()/1000
      }
    })
  }, 1000);