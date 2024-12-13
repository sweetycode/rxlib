/**
 * This is a reusable class of a Bit Array.
 */

type BitValue = 0|1


export default class BitArray {
    private bytes: Uint8Array

    constructor(initialLength: number = 64) {
        this.bytes = new Uint8Array(BitArray.capByteLengthOf(initialLength, 1))
    }

    get(index: number): BitValue {
        if (index < 0) {
            throw new Error(`Illegal argument of negative index: ${index}`)
        }
        const byteIndex = index >> 3
        if (byteIndex >= this.bytes.length) {
            return 0
        }
        
        const offset = index & 7
        return (this.bytes[byteIndex] & 1 << offset) != 0 ? 1: 0
    }

    /**
     * Update value at the index, and return the legacy value
     */
    set(index: number, value: BitValue) {
        if (index < 0) {
            throw new Error(`Illegal argument of negetive index: ${index}`)
        }

        const byteIndex = index >> 3
        if (byteIndex >= this.bytes.length) {
            // just do nothing as the `get` will default to 0
            if (value == 0) {
                return 0
            }
            // expand the byte array
            const oldBytes = this.bytes
            this.bytes = new Uint8Array(BitArray.capByteLengthOf(index))
            this.bytes.set(oldBytes)
        }

        const offset = index & 7

        if (value == 1) {
            this.bytes[byteIndex] |= (1 << offset)
        } else {
            this.bytes[byteIndex] &= ~(1 << offset)
        }
    }


    /**
     * Calculate the length in bytes for expected length in bits.
     * 
     * The result will align with the nearest great number could devided by 16.
     */
    private static capByteLengthOf(bitLength: number, factor: number = 1.5): number {
        return Math.floor((Math.ceil(bitLength / 8) * factor + 15) / 16) * 16
    }
}