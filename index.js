import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';
import dayjs from 'dayjs';


console.log(chalk.green(' NAMA '), ': ', chalk.inverse(' Ahmad Ramadhani R '));
console.log(chalk.green(' NIM '), ' : ', chalk.inverse(' F1D02310102 '));

const tanggalLahir = dayjs('2005-01-01'); // Ubah sesuai tanggal lahirmu (YYYY-MM-DD)
const umur = dayjs().diff(tanggalLahir, 'year');
console.log(chalk.green(' UMUR ') + ' :  ' + chalk.inverse(` ${umur} tahun`));

console.log(
    cowsay.say({
        text: "Hidup memang penuh tantangan, tapi bukan berarti kita tidak boleh tertawa saat menjalaninya.",
        f: "turkey",
        e: "O_O", 
    })
);

async function nama() {
  const text = await figlet.text("Ahmad Ramadhani R");
  console.log(gradient.pastel.multiline(text));
}

nama();