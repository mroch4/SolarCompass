import { LABELS } from "../common/Labels";

export const getLabelsPack = (countryCode: string) => {
  const labelsPackage = LABELS.find((set) => set.intl === countryCode);
  return labelsPackage.labels;
};
