import { Transform } from 'stream';
import { crlf, ILineBreakInput } from 'crlf-normalize';

export function transformLinebreak(newline?: ILineBreakInput)
{
	return new Transform({
		transform(chunk, _encoding, callback)
		{
			const data = crlf(chunk.toString(), newline);
			callback(null, data);
		},
	})
}

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(transformLinebreak, "__esModule", { value: true });

	Object.defineProperty(transformLinebreak, 'transformLinebreak', { value: transformLinebreak });
	Object.defineProperty(transformLinebreak, 'default', { value: transformLinebreak });


}

export default transformLinebreak
