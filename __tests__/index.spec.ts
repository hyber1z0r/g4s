import * as calc from '../src'

describe('calc tests', () => {
	describe('sum()', () => {
		it('should return 3', () => {
			expect(calc.sum(2, 1)).toEqual(3)
		})
	})
	describe('sub()', () => {
		it('should return 1', () => {
			expect(calc.sub(2, 1)).toEqual(1)
		})
	})
	describe('div()', () => {
		it('should return 2', () => {
			expect(calc.sub(4, 2)).toEqual(2)
		})
	})
	describe('mult()', () => {
		it('should return 6', () => {
			expect(calc.mult(2, 3)).toEqual(6)
		})
	})
})
