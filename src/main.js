// Wedding Toast generator
// Generates a phrase for a wedding toast by combining together the following:
// 1. An introduction, (e.g. "May I have your attention?")
// 2. Identifying the bride and groom in some way (e.g. "To the new Mr. and Mrs.")
// 3. Two encouraging and wishful phrases combined, (e.g. "May they live together happily forever.")
// The phrases must be different

const introductions = [
  'Excuse me! May I have your attention?',
  "Ahem. Check, check. We're good? Great. Hey everyone, may I have a few words?",
  "Hey everyone! Hello? Ah, thank you. I'd like to make a toast.",
  'May I have your attention please? Thank you. Let us raise our glasses tonight to celebrate...'
]

const identifications = [
  'To the bride and groom',
  'To the new Mr. and Mrs.',
  'To the newly wedded couple',
  'To the newlyweds'
]

const phrases = [
  'May thy life be long and happy',
  'May they remain lovers for all of life',
  'May your wedding days be few and your anniversaries many'
]

const randomFromArray = arr => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const toastFactory = (introduction, identify, phrase1, phrase2) => {
  const toast = {
    introduction,
    identify,
    phrase1,
    phrase2,
    makeToast () {
      console.log(
        `${this.introduction}\n${this.identify} ...\n${this.phrase1}\n${this.phrase2}`
      )
    }
  }
  return toast
}

const toastGenerator = () => {
  const introduction = randomFromArray(introductions)
  const identify = randomFromArray(identifications)
  const phrase1 = randomFromArray(phrases)

  // pick a different phrase than the previous one
  // create a new version of the phrases array with the first phrase removed
  const reducedPhrases = phrases.filter(phrase => {
    return phrase !== phrase1
  })
  const phrase2 = randomFromArray(reducedPhrases)

  return toastFactory(introduction, identify, phrase1, phrase2)
}

console.log(toastFactory('A', 'B', 'C', 'D'))
toastFactory('A', 'B', 'C', 'D').makeToast()
console.log(randomFromArray(introductions))
// final two phrases may match
toastFactory(
  randomFromArray(introductions),
  randomFromArray(identifications),
  randomFromArray(phrases),
  randomFromArray(phrases)
).makeToast()
// generator ensures final two phrases do not match
toastGenerator().makeToast()
// test that the options aren't eliminated by multiple calls to toastGenerator
toastGenerator().makeToast()
toastGenerator().makeToast()
toastGenerator().makeToast()
toastGenerator().makeToast()
