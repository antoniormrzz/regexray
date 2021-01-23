declare function scan(
  obj: object,
  regexArray: RegExp[]
): Promise<
  {
    path: string;
    log: RegExpMatchArray;
  }[]
>;

export = scan;
