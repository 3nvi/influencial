import React from 'react';
import Influencer from './list_item';

function InfluencerList() {
  return (
    <ol className="influecer-list">
      <Influencer
        gender="male"
        image="http://lorempixel.com/170/170"
        info="This is a beautiful description with bad grammar of cource fucking grammar Nazi"
        location="Kurdistan"
        name="Cara DeLevigne"
        service="twitter"
        serviceURL="https://twitter/mrjamesmay/"
        website="https://apilama.com"
        mediaCount={1200}
        followerCount={1200}
        username="mrJamesMay"
        order={1}
      />
      <Influencer
        gender="male"
        image="http://lorempixel.com/170/170"
        info="This is a beautiful description with bad grammar of cource fucking grammar Nazi"
        location="Kurdistan"
        name="Cara DeLevigne"
        service="twitter"
        serviceURL="https://twitter/mrjamesmay/"
        website="https://apilama.com"
        mediaCount={1200}
        followerCount={1200}
        username="mrJamesMay"
        order={2}
      />
      <Influencer
        gender="male"
        image="http://lorempixel.com/170/170"
        info="This is a beautiful description with bad grammar of cource fucking grammar Nazi"
        location="Kurdistan"
        name="Cara DeLevigne"
        service="twitter"
        serviceURL="https://twitter/mrjamesmay/"
        website="https://apilama.com"
        mediaCount={1200}
        followerCount={1200}
        username="mrJamesMay"
        order={3}
      />
      <Influencer
        gender="male"
        image="http://lorempixel.com/170/170"
        info="This is a beautiful description with bad grammar of cource fucking grammar Nazi"
        location="Kurdistan"
        name="Cara DeLevigne"
        service="twitter"
        serviceURL="https://twitter/mrjamesmay/"
        website="https://apilama.com"
        mediaCount={1200}
        followerCount={1200}
        username="mrJamesMay"
        order={4}
      />
    </ol>
  );
}

export default InfluencerList;
