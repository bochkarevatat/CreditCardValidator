export default function isValidCard(value) {
  const visaRe = '^(?:4[0-9]{12}(?:[0-9]{3})?)$';
  const masterRe = '^(?:5[1-5][0-9]{14})$';
  const mirRe = '^(?:220[0|4][0-9]{0,})$';
  const discoverRe = '^(?:6(?:011|5[0-9]{2})[0-9]{12})$';
  const jcbRe = '^(?:(?:2131|1800|35[0-9]{3})[0-9]{11})$';
  let bank;
  if (value.match(visaRe)) {
    bank = 'visa';
  } else if (value.match(masterRe)) {
    bank = 'master';
  } else if (value.match(mirRe)) {
    bank = 'mir';
  } else if (value.match(discoverRe)) {
    bank = 'discover';
  } else if (value.match(jcbRe)) {
    bank = 'jcb';
  }

  return bank;
}
