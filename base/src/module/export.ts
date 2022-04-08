interface StringValidator {
  isAcceptable(t: string): boolean;
}

export class CodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return false
  }
}

