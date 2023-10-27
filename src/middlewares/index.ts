export const logger = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    next(action);
}

export const featuring = (store: any) => (next: any) => (actionInfo: any) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.payload];
    const updatedActionInfo = {
      ...actionInfo,
      payload: [...featured],
    };
    next(updatedActionInfo);
  };