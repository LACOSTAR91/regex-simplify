function resolveRegex(data: string, regex: RegExp): resolveRegex {   
    if (!data) throw new TypeError("[Regex-simplify] Missing data");
    if (!regex) throw new TypeError("[Regex-simplify] Missing regex");
    const numberOfMatch = data.match(regex)?.length ?? 0;
    const groups = new Array();

    if(numberOfMatch > 1) data.match(regex)?.forEach((match) => groups.push(regex.exec(data)?.groups ?? null));
    else groups.push(regex.exec(data)?.groups ?? null);

    return {
        include: numberOfMatch > 0 ? true : false,
        matchs: data.match(regex),
        groups: groups,
    }
};

interface resolveRegex {
    include: boolean,
    matchs: RegExpMatchArray | null,
    groups: any[] | null
}

export { resolveRegex };