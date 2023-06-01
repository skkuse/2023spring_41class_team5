import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "components";

const HintModal = ({ hint, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50">
            <div className="bg-white rounded-md p-6 w-full max-w-md">
                <Text variant="body1">{hint}</Text>
                <div className="mt-4 flex justify-center">
                    <Button
                        shape="RoundedBorder5"
                        variant="FillBlue70001"
                        size="sm"
                        onClick={onClose}
                    >
                        확인
                    </Button>
                </div>
            </div>
        </div>
    );
};

HintModal.propTypes = {
    hint: PropTypes.string,
    onClose: PropTypes.func,
};

HintModal.defaultProps = {
    hint: "",
    onClose: () => { },
};

export { HintModal };