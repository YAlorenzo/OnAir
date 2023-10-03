const useRunTime = (time) => {
  const h = Math.floor(time / 60);
  const m = time % 60;
  return `${h}h ${m}m`;
};

export { useRunTime };