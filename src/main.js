// Wedding Toast generator
// Generates a phrase for a wedding toast by combining together the following:
// 1. An introduction, (e.g. "May I have your attention?")
// 2. Identifying the bride and groom in some way (e.g. "To the new Mr. and Mrs.")
// 3. Two encouraging and wishful phrases combined, (e.g. "May they live together happily forever.")

const toastGenerator = (introduction, identify, phrase1, phrase2) => {
    const toast = {
        introduction,
        identify,
        phrase1,
        phrase2,
    };
    return toast;
}