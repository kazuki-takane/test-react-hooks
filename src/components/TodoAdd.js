import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({
    buttonText,
    inputEl,
    handleAddTodoListItem,
    placeholder,
    leftIcon
}) => {
    return (
        <>
            <Textarea
                ref={inputEl}
                placeholder={placeholder}
                bgColor="white"
                mt="8"
                borderColor="gray.400"
            />
            <Button
                onClick={handleAddTodoListItem}
                leftIcon={leftIcon}
                colorScheme="blue"
                mt="8"
            >
                {buttonText}
            </Button>
        </>
    );
};