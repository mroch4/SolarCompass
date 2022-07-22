const isValidDate = (d: Date): boolean => {
  return d instanceof Date && !isNaN(d.getTime());
};

export default isValidDate;
