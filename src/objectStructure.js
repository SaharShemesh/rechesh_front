let object = {
     1:{
         "desc":"פריט ראשון",
        1:{
           "name":"ספק ראשון",
           "amount":5,
           "price":300,
           "providing_time":"1-3-2022"
          },
        2:{
            "name":"ספק שני",
            "amount":53,
            "price":300,
            "providing_time":"1-3-2022"
          },
      3:{
         "name":"ספק מס 3",
        "amount":42,
        "price":300,
        "providing_time":"1-3-2022"    
          }  
     },
     2:{
         "desc":"פריט שני",
         1:{
            "name":"ספק ראשון",
            "amount":51,
            "price":300,
            "providing_time":"1-3-2022"
           },
         2:{
             "name":"ספק שני",
             "amount":53,
             "price":300,
             "providing_time":"1-3-2022"
           },
       3:{
          "name":"ספק מס 3",
         "amount":55,
         "price":300,
         "providing_time":"1-3-2022"    
           } 
     }
}

let rows = [];
  let get_provider = (providers,at) => {
    let providers_co = {};  
    Object.keys(providers).forEach(pr => {
      providers_co[pr] = providers[pr][at];
      })
     return providers_co;
  };
  Object.keys(object).forEach(item_id => {
    let item =  object[item_id];
     const item_desc = item.desc;
     delete item.desc;
        rows.push(
         { ...{
               "desc":item_desc, 
               "order_info":"כמות",
           },
         ...get_provider(item,"amount")
        }
        );

        rows.push(
            { ...{
                  "desc":item_desc, 
                  "order_info":"מחיר ליח",
              },
            ...get_provider(item,"price")
           }
           );

           rows.push(
            { ...{
                  "desc":item_desc, 
                  "order_info":"זמן אספקה",
              },
            ...get_provider(item,"providing_time")
           }
           );
 });

 console.log(rows);