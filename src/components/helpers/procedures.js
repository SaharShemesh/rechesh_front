export function map_bid_to_table(object){
let rows = [];
  let get_provider = (providers,at) => {
    let providers_co = {};  
    Object.keys(providers).forEach(pr => {
       if(pr!="desc")
      providers_co[pr] = providers[pr][at];
      })
     return providers_co;
  };
  Object.keys(object).forEach(item_id => {
    let item =  object[item_id];
     let item_desc = item.desc;
     //delete item.desc;
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
  return rows;
}