import { numberValidation, transformInt } from '../utils'
import { getOutput } from '../interface/output'

const output = getOutput()

export class Command {
  constructor(calculator) {
    this.calculator = calculator
  }

  execute() {}
}

export class AddCommand extends Command {
  execute() {
    if (!numberValidation(this.calculator.currentValue, output.value)) return
    output.value = transformInt(
      Number(this.calculator.currentValue) + Number(output.value)
    )
  }
}

export class PowCommand extends Command {
  execute() {
    if (!numberValidation(this.calculator.currentValue, output.value)) return
    output.value = transformInt(
      this.calculator.equalCounter === 0
        ? Number(this.calculator.currentValue) ** Number(output.value)
        : Number(output.value) ** Number(this.calculator.currentValue)
    )
  }
}

export class Pow2Command extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(Number(output.value) ** 2)
  }
}

export class Pow3Command extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(Number(output.value) ** 3)
  }
}

export class Pow10naXCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(10 ** Number(output.value))
  }
}

export class OneOfXCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(1 / Number(output.value))
  }
}

export class OneOfXPowCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(
      this.calculator.equalCounter === 0
        ? 1 / Number(this.calculator.currentValue) ** Number(output.value)
        : 1 / Number(output.value) ** Number(this.calculator.currentValue)
    )
  }
}

export class OneOfXPow2Command extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(1 / Number(output.value) ** 2)
  }
}

export class OneOfXPow3Command extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(1 / Number(output.value) ** 3)
  }
}

export class SubtractCommand extends Command {
  execute() {
    if (!numberValidation(this.calculator.currentValue, output.value)) return
    output.value = transformInt(
      this.calculator.equalCounter === 0
        ? Number(this.calculator.currentValue) - Number(output.value)
        : Number(output.value) - Number(this.calculator.currentValue)
    )
  }
}

export class MultiplyCommand extends Command {
  execute() {
    if (!numberValidation(this.calculator.currentValue, output.value)) return
    output.value = transformInt(
      Number(this.calculator.currentValue) * Number(output.value)
    )
  }
}

export class DivideCommand extends Command {
  execute() {
    if (!numberValidation(this.calculator.currentValue, output.value)) return
    if (Number(output.value) === 0) {
      output.value = 'Error'
    } else {
      output.value = transformInt(
        this.calculator.equalCounter === 0
          ? Number(this.calculator.currentValue) / Number(output.value)
          : Number(output.value) / Number(this.calculator.currentValue)
      )
    }
  }
}

export class FactorialCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    let res = 1
    for (let i = 1; i <= Number(output.value); i++) {
      res *= i
    }
    output.value = transformInt(res)
  }
}

export class ClearCommand extends Command {
  constructor(calculator) {
    super(calculator)
    this.previousValue = calculator.currentValue
    this.previousOperator = calculator.currentOperator
    this.previousNewNumber = output.value
  }

  execute() {
    output.value = 0
    this.calculator.currentOperator = ''
    this.calculator.currentValue = 0
  }
}

export class SwitchSignCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    output.value = transformInt(output.value * -1)
  }
}

export class PercentCommand extends Command {
  execute() {
    if (!numberValidation(output.value)) return
    if (
      ['/', '*', ''].includes(this.calculator.currentOperator) ||
      this.calculator.operatorActive === true
    ) {
      output.value = transformInt(output.value / 100)
    } else {
      output.value = transformInt(
        (Number(this.calculator.currentValue) * Number(output.value)) / 100
      )
    }
  }
}
