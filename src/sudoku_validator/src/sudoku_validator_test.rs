#[cfg(test)]

// TDD could be fun... RED -> GREEN -> REFACTOR
// https://matthewkmayer.github.io/blag/public/post/tdd-with-rust/

mod tests {
    #[test]
    fn exploration() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn another() {
        panic!("Make this test fail");
    }
}