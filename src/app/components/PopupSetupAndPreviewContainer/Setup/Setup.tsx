"use client"

import React from "react"
import { SubHead } from "../../SubHead"
import { SubSetup } from "./SubSetup"
import { Size } from "./Size"
import { Position } from "./Position"
import { Colors } from "./Colors"
import { UploadLogoImage } from "./UploadLogoImage"
import { Contents } from "./Contents"
import { usePopupState } from "../../../context/PopupState/PopupState"
import { CodeOnButtonClick } from "./CodeOnButtonClick"

type Props = {}

export const Setup = (props: Props) => {
    const state = usePopupState()
    const isLogoUploadSectionWillBeRendered = state.logoFileName != undefined
    const isImageUploadSectionWillBeRendered = state.imageFileName != undefined
    return (
        <div className="w-full sm:max-w-[378px]">
            <SubHead num={2} subHeaderText="Appearance (Size, colors, logo)" />
            <SubSetup miniHeader="Size">
                <Size />
            </SubSetup>
            <SubSetup miniHeader="Position">
                <Position />
            </SubSetup>
            <SubSetup miniHeader="Colors">
                <Colors />
            </SubSetup>
            {isLogoUploadSectionWillBeRendered && (
                <SubSetup miniHeader="Upload Logo">
                    <UploadLogoImage imageOrLogo="logo" />
                </SubSetup>
            )}
            <SubHead num={3} subHeaderText="Content" />
            <SubSetup miniHeader="Edit your content">
                <Contents contents={state.contents} />
            </SubSetup>
            {isImageUploadSectionWillBeRendered && (
                <SubSetup miniHeader="Upload Image">
                    <UploadLogoImage imageOrLogo="image" />
                </SubSetup>
            )}
            <SubHead num={4} subHeaderText="Code" />
            <CodeOnButtonClick />
        </div>
    )
}