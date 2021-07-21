export class General_details_mapper {
  static server_to_client(order) {
    let order_details = {
      order_type: { name: order.Order_type.type, id: order.Order_type.type_id },
      paka: order.Paka
        ? {
            name: order.Paka.paka_number,
            id: order.Paka.paka_id,
          }
        : undefined,
      Professional_at: order.proffesional_authority
        ? {
            name:
              order.proffesional_authority.id_num +
              "-" +
              order.proffesional_authority.first_name +
              " " +
              order.proffesional_authority.last_name,
            id: order.proffesional_authority.id,
          }
        : undefined,
      budget_type: order.Budget_type
        ? {
            name: order.Budget_type.type,
            id: order.Budget_type.type_id,
          }
        : undefined,
      paka_desc: order.paka_desc ? order.paka_desc : undefined,
      assignment_id: order.assignment
        ? {
            name: order.assignment.assignment_number,
            id: order.assignment.id,
          }
        : undefined,
      procument_type: order.Procument_Type
        ? {
            name: order.Procument_Type.type,
            id: order.Procument_Type.type_id,
          }
        : undefined,
      priority: order.Priority
        ? {
            name: order.Priority.priority_name,
            id: order.Priority.id,
          }
        : undefined,
      pulling_bag: order.Pulling_bag
        ? {
            name:
              order.Pulling_bag.bag_id +
              "-" +
              order.Pulling_bag.bag_description,
            id: order.Pulling_bag.bag_id,
          }
        : undefined,
      paka_type:
        order.Paka && order.Paka.Paka_type
          ? {
              name: order.Paka.Paka_type.type,
              id: order.Paka.Paka_type.id,
            }
          : undefined,
      need: order.need,
      schedule: order.schedule,
    };

    return order_details;
  }
  static client_to_server(values) {
    let details = Object.keys(values).reduce((res, key) => {
      let value;
      console.log(values[key]);
      if (values[key] == undefined) value = null;
      else value = values[key].id ? values[key].id : values[key];

      return (res[key] = value), res;
    }, {});
    return details;
  }
}

export class Items_mapper {
  static client_to_server(items) {
    let sell_items = items.map(
      ({
        technical_spec,
        desc,
        quantity,
        price,
        creator_num,
        measurement,
        recommended_provider,
        Iaf_num,
        id,
      }) => {
        let item = {
          technical_spec: technical_spec.id == 1 ? true : false,
          desc,
          quantity,
          price,
          creator: creator_num.id,
          measurement: measurement.id,
          provider: recommended_provider.id,
          Iaf_num: Iaf_num.id,
        };
        if (id) item.id = id;
        return item;
      }
    );

    return sell_items;
  }

  static server_to_client(sell_items) {
    let mapped_items = sell_items.map((item) => ({
      desc: item.desc,
      id: item.item_id,
      technical_spec: item.technical_spec
        ? { name: "כן", id: 1 }
        : { name: "לא", id: 2 },
      creator_num: { name: item.Creator.creator_num, id: item.Creator.id },
      creator_name: item.Creator.creator_name,
      recommended_provider: {
        name: item.Provider.provider_name,
        id: item.Provider.provider_id,
      },
      quantity: item.quantity,
      measurement: {
        name: item.Measurement.measurement,
        id: item.Measurement.id,
      },
      price: item.price,
      Iaf_num: { name: item.iaf_num.iaf_num, id: item.iaf_num.id },
    }));
    return mapped_items;
  }
}
