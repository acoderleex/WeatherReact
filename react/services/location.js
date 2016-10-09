'use strict';

import realm from '../realms';
import { weatherApiKey, weatherApiUrl} from '../configs/config';

const defaultLocations= [
  {name: 'Canberra',postCode:'2600',state:'ACT'},
  {name: 'Sydney', postcode: '2000', state: 'NSW'},
  {name: 'Melbourne', postcode: '3000', state: 'VIC'},
  {name: 'Brisbane', postcode: '4000', state: 'QLD'},
  {name: 'Perth', postcode: '6000', state: 'WA'},
  {name: 'Adelaide', postcode: '5000', state: 'SA'},
  {name: 'Hobart', postcode: '7000', state: 'TAS'},
  {name: 'Darwin', postcode: '0800', state: 'NT'},
];

class LocationService {
  async initialise(){
    let context= realm.current();
    try {
        let locations = context.objects('Location');
        context.write(() => {
          context.delete(locations);
        });
      console.log("--s-ss-s-s-s-s-s-------"+locations.length);
        if (locations.length>0) {
          return;
        }
        for (var i = 0; i < defaultLocations.length; i++) {
          var location=defaultLocations[i];
          var locationId=await this.getLocationIdFromApiAsync(location.name);
          console.log("===="+locationId);
          context.write(()=>{
            context.create('Location',{
              name: location.name,
              postcode: String(location.postcode),
              state: location.state,
              openWeatherId: locationId.toString()
            });
          });
        }
    }catch(e){
      console.log("----wwwwww------"+e.message);
    } finally {
      context.close();
    }
  }

  async getLocationIdFromApiAsync(location: string){
    var url=`${weatherApiUrl}/find?q=${location},AU&type=accurate&units=metric&appid=${weatherApiKey}`;
    var locationId;
    try {
        let response = await fetch(url);
        const result= await response.json();
        return result.list[0].id;
    } catch (e) {
      global.log(e);
    }
  }
}

module.exports = LocationService;
