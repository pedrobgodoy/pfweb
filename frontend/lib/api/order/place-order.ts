interface PlaceOrderInput {
  cpf: string;
  items: {
    idItem: number;
    quantity: number;
  }[];
}

const placeOrder = async (input: PlaceOrderInput) => {
  const baseUrl = process.env.NEXT_PUBLIC_ECOMMERCE_BACKEND_HOST;
  const requestConfig = {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseUrl}/orders`, requestConfig);
  const data = await response.json();
  return {
    code: data.code,
    total: data.total,
  };
};

export default placeOrder;
