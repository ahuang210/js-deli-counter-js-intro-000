let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(`${name}`);
  if (katzDeliLine.length > 0) {
    let i = katzDeliLine.length;
    return `Welcome, ${name}. You are number ${[i]} in line.`
  } else {
    let i = 1;
    return `Welcome, ${name}. You are number ${[i]} in line.`
  }
}

let nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine
}

let currentLine = katzDeliLine => {
  while (katzDeliLine.length > 0) {
    let i = 0;
    console.log (`The line is currently: ${i + 1}. ${katzDeliLine[i]}`);
    i += 1
  } return "The line is currently empty."
}
