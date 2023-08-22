# Assalamualaikum! Presenting UniqueNaam!

UniqueNaam is an npm package that provides a utility function for generating unique filenames by appending a timestamp to the original filename. It is designed to be simple and easy to use.

## Installation

To install UniqueNaam, use npm or yarn:

```bash
npm install uniquenaam

# or

yarn add uniquenaam
```

## Usage

Import the `UniqueNaam` function from the package:

```javascript
const { UniqueNaam } = require("uniquenaam/uniquenaam");
```

Then, call the `UniqueNaam` function, passing the original filename as an argument:

```javascript
const originalFilename = "example.txt";
const uniqueFilename = UniqueNaam(originalFilename);

console.log(uniqueFilename); // Outputs something like: "1624372177321_example.txt"
```

The `UniqueNaam` function appends a timestamp (obtained from `Date.now()`) to the original filename, separated by an underscore. This ensures that each generated filename is unique, even if called multiple times within the same millisecond.

## License

UniqueNaam is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify this package according to your needs.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/abdullahwins/uniquenaam).

## Contact

For any questions or inquiries, please contact me at [AbdullahWins](https://github.com/abdullahwins).

---

Thank you for using UniqueNaam! I hope it simplifies your filename generation needs.
