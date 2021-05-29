export function map_bid_to_table(object) {
  let rows = [];
  let get_provider = (providers, at) => {
    let providers_co = {};
    Object.keys(providers).forEach((pr) => {
      if (pr != "desc") providers_co[pr] = providers[pr][at];
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
      ...get_provider(item, "amount"),
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
  return rows;
}

export function re_order_the_key(collection, ...others) {
  return collection.map((item, new_key) => {
    let mapped_item = { ...item, key: new_key + 1 };
    others.forEach((other) => {
      mapped_item[other] = new_key + 1;
    });
    return mapped_item;
  });
}
