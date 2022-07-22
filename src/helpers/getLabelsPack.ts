import LABELS from "../labels/Labels";

const getLabelsPack = (countryCode: string) => {
  const labelsPackage = LABELS.find((set) => set.intl === countryCode);
  return labelsPackage.labels;
};

export default getLabelsPack;
