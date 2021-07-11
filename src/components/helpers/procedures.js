export function map_bid_to_table(object) {
  let rows = [];
  let get_provider = (providers, at) => {
    let providers_co = {};
    Object.keys(providers).forEach((pr) => {
      if (pr != "desc" && pr != "quantity")
        providers_co[pr] = providers[pr][at];
      if (at == "quantity" && pr != "desc" && pr != "quantity")
        providers_co[pr] = providers.quantity;
    });
    return providers_co;
  };
  Object.keys(object).forEach((item_id, c) => {
    let item = object[item_id];
    let item_desc = item.desc;
    if (c > 0) c += 2;
    rows.push({
      ...{
        key: c,
        desc: item_desc,
        order_info: "כמות",
      },
      ...get_provider(item, "quantity"),
    });

    rows.push({
      ...{
        key: c + 1,
        desc: item_desc,
        order_info: "מחיר ליח",
      },
      ...get_provider(item, "price"),
    });

    rows.push({
      ...{
        key: c + 2,
        desc: item_desc,
        order_info: "זמן אספקה",
      },
      ...get_provider(item, "providing_time"),
    });
  });
  console.log("rowss", rows);
  return rows;
}

export function re_order_the_key(collection, ...others) {
  return collection.map((item, new_key) => {
    let mapped_item = { ...item, key: Date.now() + new_key };
    others.forEach((other) => {
      mapped_item[other] = new_key + 1;
    });
    return mapped_item;
  });
}

export function get_random(keys) {
  let random;
  do {
    random = Math.random().toString(36).substring(7);
  } while (keys.find((keyy) => keyy == random));
  return random;
}

export const preaper_object_to_server = (values) => {
  let details = Object.keys(values)
    .filter((detail_name) => values[detail_name])
    .reduce((res, key) => {
      if (values[key].id && values[key].id == -1) return res;
      let value = values[key].id ? values[key].id : values[key];
      console.log(value);
      return (res[key] = value), res;
    }, {});
  return details;
};
