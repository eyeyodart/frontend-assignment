const statuses = [
  {
    value: 0,
    label: "under way using engine",
  },
  {
    value: 1,
    label: "at anchor",
  },
  {
    value: 2,
    label: "not under command",
  },
  {
    value: 3,
    label: "restricted maneuverability",
  },
  {
    value: 4,
    label: "constrained by her draught",
  },
  {
    value: 5,
    label: "moored",
  },
  {
    value: 6,
    label: "aground",
  },
  {
    value: 7,
    label: "engaged in fishing",
  },
  {
    value: 8,
    label: "under way sailing",
  },
  {
    value: 9,
    label:
      "reserved for future amendment of navigational status for ships carrying DG, HS, or MP, or IMO hazard or pollutant category C, high-speed craft (HSC)",
  },
  {
    value: 10,
    label:
      "reserved for future amendment of navigational status for ships carrying dangerous goods (DG), harmful substances (HS) or marine pollutants (MP), or IMO hazard or pollutant category A, wing in ground (WIG)",
  },
  {
    value: 11,
    label: "power-driven vessel towing astern (regional use)",
  },
  {
    value: 12,
    label:
      "power-driven vessel pushing ahead or towing alongside (regional use)",
  },
  {
    value: 13,
    label: "reserved for future use",
  },
  {
    value: 14,
    label: "AIS-SART (active), MOB-AIS, EPIRB-AIS",
  },
  {
    value: 15,
    label: "undefined",
  },
];

/**
 * Receives value and
 * returns a string label.
 *
 * @returns {string} | { value: number, label: string }
 */
export const getStatus = (value: number) => {
  return statuses.find((status) => status.value == value)?.label;
};

export default getStatus;
