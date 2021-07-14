export function map_bid_to_table(object) {
  let rows = [];
  let get_provider_ids = () => {
    return Object.keys(Object.values(object)[0] || {})
      .filter((key) => key != "desc" && key != "quantity")
      .map((provider_id) => parseInt(provider_id));
  };
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

  let get_sum_bid = (provider_id) => {
    return Object.values(object).reduce((sum, item) => {
      return item[provider_id]
        ? parseInt(item.quantity) * parseFloat(item[provider_id].price) + sum
        : sum;
    }, 0);
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
  //add footer
  rows.push({
    key: Object.values(object).length + 2,
    desc: 'סה"כ מחיר כולל מע"מ',
    ...get_provider_ids()
      .map((id) => ({ [id]: get_sum_bid(id) }))
      .reduce(
        (prev, value) => ({
          ...prev,
          [Object.keys(value)[0]]: Object.values(value)[0],
        }),
        {}
      ),
  });
  rows.push({
    key: Object.values(object).length + 3,
    desc: "",
    ...get_provider_ids()
      .map((id) => ({ [id]: id }))
      .reduce(
        (prev, value) => ({
          ...prev,
          [Object.keys(value)[0]]: Object.values(value)[0],
        }),
        {}
      ),
  });

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
