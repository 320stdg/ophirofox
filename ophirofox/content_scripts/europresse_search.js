function onLoad() {
    const url = new URL(window.location);
    const source = url.searchParams.get("ophirofox_source");
    if (!source) return;
    const source_url = new URL(source);
    const lemonde_match = source_url.pathname.match(/([^/.]+)(_\d*_\d*\.html)?$/);
    if (!lemonde_match) throw new Error("Could not find keywords in lemonde url");
    const stopwords = new Set(['d', 'l', 'et'])
    const search_terms = lemonde_match[1].split('-').filter(w => !stopwords.has(w)).join(" ");
    const keyword_field = document.getElementById("Keywords");
    keyword_field.value = search_terms;
    keyword_field.form.submit();
}

onLoad();