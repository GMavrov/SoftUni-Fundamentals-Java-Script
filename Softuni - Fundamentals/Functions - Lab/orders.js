function orders(product, qty) {
    switch (product) {
      case "coffee":
        return (qty * 1.5).toFixed(2);
      case "water":
        return (qty * 1.0).toFixed(2);
      case "coke":
        return (qty * 1.4).toFixed(2);
      case "snacks":
        return (qty * 2).toFixed(2);
    }
  }
  orders("water", 5);