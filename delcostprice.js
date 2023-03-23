        //delivery cost 
        const delcostprice=(a,b)=>{
          console.log({a,b});
          try {
            const location="470 james street,new haven"
            const destination="New york city"
           var config = {
             method: 'get',
             url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${a}&destinations=${b}&units=imperial&key=AIzaSyBgdZyG5qyyBQoblLSVkjzCNvCQOnOeIiY`,
             headers: { }
           };
        
           //request
           axios(config)
           .then(function (response) {
             let newData= response.data.rows[0].elements[0];
             //calculation module
             let BaseRate=1.313
             let fuelSurchage=0.55
             let distanceRate=0.5
             let timeRate=0.1025
             //price calculation
             const calculateCost = (time, distance) => {
               const newone=BaseRate + time * timeRate + distance * distanceRate +fuelSurchage;
               return newone.toFixed(2)
             };
        //convert seconds to minutes
         const secondsToMinutes = (seconds) => {
           return seconds / 60;
         };
         
             // time conversion
             let rawtime = newData.duration.text
             let time1  =  parseInt(rawtime.split(' ')[0])
             let unit1  =  rawtime.split(' ')[1]
             let time2placeholder = rawtime.split(' ')[2]
             let time2  =  time2placeholder?parseInt(time2placeholder):time2placeholder
             let unit2  =  rawtime.split(' ')[3]
         
             // distance conversion
             let rawdistance= newData.distance.text
             let distance = rawdistance.split(' ')[0]
             let dis_unit = rawdistance.split(' ')[1]
             //data
             let convertedOrignal= {
                   distance:{
                     distance:distance,
                     unit:dis_unit
                    },
                   time:{time1,unit1,time2,unit2} 
             }
            //handling data
             const newdis=convertedOrignal.distance.distance
             const newtime=secondsToMinutes(newData.duration.value)
             const cost=calculateCost(Math.round(newtime),newdis)
             const cost1=5.99
             if(newdis<=10){
               return cost1
             }else{
              // console.log({cost});
               setc(cost)
               return cost
             }
           }) 
           .catch(function (error) { 
             console.log(error);
           });
           } catch (error) {
             console.log(error)
           }
        }